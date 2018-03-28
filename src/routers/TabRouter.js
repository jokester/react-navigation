import SwitchRouter from './SwitchRouter';
import withDefaultValue from '../utils/withDefaultValue';

export default (routeConfigs, config = {}) => {
  config = { ...config };
  // Reset the state of any nested navigators when switching away from a screen. Defaults to true.
  config = withDefaultValue(config, 'resetOnBlur', false);
  // reset to initial router on
  config = withDefaultValue(config, 'backBehavior', 'initialRoute');

  const switchRouter = SwitchRouter(routeConfigs, config);
  return switchRouter;
};
