import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';
import { pushState} from 'redux-react-router';
import * as DeviceActions from '../../actions/devices-actions';
import * as ForwarderActions from '../../actions/forwarders-actions';
import * as MeshbluActions from '../../actions/meshblu-actions';

var ForwarderNewRegister = React.createClass({
  componentDidMount: function() {
    const { dispatch, forwarder, meshblu } = this.props;
    dispatch(MeshbluActions.registerDevice(forwarder, meshblu.connection, this.subscriptionUpdate));
  },

  subscriptionUpdate: function() {
    const{forwarder, dispatch, meshblu, devices} = this.props;
    console.log('Forwarder', forwarder);
    _.each(forwarder.subscriptions, function(subscriptionUUID) {
      dispatch(MeshbluActions.subscribeToDevice(subscriptionUUID, forwarder.uuid, meshblu.connection));
    })
    let deviceRecord = _.pick(forwarder, ['uuid', 'type', 'connector']);
    var gatebluDevice = _.findWhere(devices.gateblus, {uuid : forwarder.gateblu});
    console.log('Gateblu Device', gatebluDevice);
    console.log('Adding new device record', deviceRecord);
    dispatch(MeshbluActions.addDeviceToGateblu(gatebluDevice, deviceRecord, meshblu.connection));
    dispatch(pushState(null, '/forwarders'));
  },

  getState: function() {
    const {forwarder} = this.props;
    return 'Registering....';
  },

  render: function() {
    const { devices, dispatch, forwarder } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <h2>Register Device</h2>

        {this.getState()}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    meshblu: state.meshblu,
    devices: state.devices,
    forwarder: state.forwarder
  };
};

export default connect(mapStateToProps)(ForwarderNewRegister);
