module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1890px',
        '4x1': '2200px'
      },
      colors: {
        segun: '#03fca1',
        acolor: '#F9C900',
        btncolor: '#F9C900',
        textred: '#EF3635',
        navtext: '#3D79CA',
        inputtext: 'rgba(0, 0, 0, 0.5)',
        bold: '#120E21',
        unverify: 'rgba(0, 0, 0, 0.3)',
        available : 'rgba(0, 0, 0, 0.05)',
        btnharsh: '#B3B3B3',
      },
      // backgroundImage: {
      //   'image': "url('/src/assets/background.png')",
      // },
      fontSize: {
        pmobile: ['14px', { lineHeight: '16px' }],
        hmobile: ['34px', { lineHeight: '40px'}],
        inputmobile: ['12px', { lineHeight: '14px'}],
        btnmobile: ['18px', { lineHeight: '21px'}],
        errormobile: ['10px', { lineHeight: '12px'}],
        homefont: ['22px', { lineHeight: '26px'}],
        homefonttwo: ['30px', { lineHeight: '40px'}],
        homefonttwodesk: ['60px', { lineHeight: '70px'}],
        cardfont: ['46px', { lineHeight: '56px'}],
        cardmobilefont: ['36px', { lineHeight: '46px'}],
        // tablet
        // pmobile: ['14px', { lineHeight: '16px' }],
        // hmobile: ['34px', { lineHeight: '40px'}],
        // inputmobile: ['12px', { lineHeight: '14px'}],
        // btnmobile: ['18px', { lineHeight: '21px'}],
        
      },
      borderRadius: {
        selectradius: '12px'
      },
      borderColor: {
        acolor: '#F9C900',
        btncolor: '#F9C900',
        spanBorder: 'rgba(0, 0, 0, 0.25)',
      },
      width: {
        mfull: 'calc(100% - 10px)',
        signinWidth: '579px',
        navitems: '65%',
        card: '550px',
        cardtwo: '600px',
      },
      height: {
        verifyheight: '629px',
        navheight: '829px',
        navi: '300px',
        div: '2px',
      },
    },
    plugins: [],
  }
}