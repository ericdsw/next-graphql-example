// Register here jest globals

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mocked } from 'ts-jest/utils'

configure({ adapter: new Adapter() });

/**
 * Prevent localstorage modifications from impacting other tests.
 */
beforeEach(() => {
  localStorage.clear();
  mocked(localStorage.setItem).mockClear();
});