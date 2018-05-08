import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppBar from 'material-ui/AppBar';
import { shallow, configure } from 'enzyme';
import { createShallow } from 'material-ui/test-utils';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<AppBar />', () => {
  it('should render the AppBar', () => {
    const children = (<div>child node</div>);
    const wrapper = shallow(<AppBar children={children} />);
  });
});
