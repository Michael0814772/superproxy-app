module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        segun: '#03fca1',
        acolor: '#F9C900',
        btncolor: '#F9C900',
        textred: '#EF3635',
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
      },
    },
    plugins: [],
  }
}