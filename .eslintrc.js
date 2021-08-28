module.exports={

    env: {
        browser: true,
        commonjs: true, 
        es2021: true, 
      },
      parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },//选择需要的ecmaFeatures
        sourceType:'module',// commonjs: true, 支持commjs，想让他同时支持import
        //就需要加  sourceType:'module',
    ecmaVersion: 12,//es2021对应12
      },
      rules: {
        'no-unused-vars':0,
      }
}