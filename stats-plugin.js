module.exports = (compiler) => {
    compiler.hooks.done.tap("DisplayStatsPlugin", stats => {
        const statsJSON = stats.toJson();
        const reasonFields = new Set();
        for (const chunk of statsJSON.chunks) {
            for (const module of chunk.modules) {
                if (module.reasons) {
                    for (const reason of module.reasons) {
                        Object.keys(reason).forEach(k => reasonFields.add(k));
                    }
                } else {
                    console.log("No reasons", module.reasons)
                }
            }
        }
        console.log("Reasons found fields", [...reasonFields])
    })
}