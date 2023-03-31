exports.default = (compiler) => {
    compiler.hooks.done.tap("TestPlugin", stats => { })
}