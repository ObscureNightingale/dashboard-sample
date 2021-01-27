const globalTheme = {
    switchWidth: '40px',
    switchHeight: '20px',
    switchPadding: '3px',
    colorContrastLow: '#d3d3d4',
    colorWhite: '#FFF',
    switchColorPrimary: '#302C40',
    switchAnimationDuration: '0.2s',
    gradient: 'linear-gradient(122deg, rgba(128,74,216,1) 0%, rgba(98,75,217,1) 100%)',
    colorGreen: '#5DC399',
    colorGray: '#adadad',
}

export const lightT = {
    primary: '#FFF',
    secondary: '#F8F8F8',
    textColor: '#000',
    header: '#7EC4E0',
    headerNumber: '#FFF',
    activeMenu: '#7EC4E0',
    labelColor: '#7EC4E0',
    buttonColor: '#FFF',
    ...globalTheme
};

export const darkT = {
    primary: '#363438',
    secondary: '#201E23',
    textColor: '#FFF',
    header: '#7EC4E0',
    headerNumber: '#7EC4E0',
    activeMenu: '#ECF5F5',
    labelColor: '#FFF',
    buttonColor: '#201E23',
    ...globalTheme
}