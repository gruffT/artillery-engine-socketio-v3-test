module.exports = {
  processorFn: function(context, userEvents, next) {
    console.log('processorFn', context.vars.resp);
    context.extraHeaders = { 'x-auth-token': context.vars.resp, 'x-foo-bar': 'barFoo' };
    return next();
  },

  logMe: function(reqParams,ctx, userEvents, next) {
    const vars = Object.assign({}, ctx.vars);
    delete vars['$processEnvironment'];
    // console.log('Log me', reqParams, vars);
    return next();
  }
}
