import { Theme, createMuiTheme, ThemeOptions } from '@material-ui/core';

const options: ThemeOptions = {

};
const createTheme = (): Theme => createMuiTheme(options);
export default createTheme;