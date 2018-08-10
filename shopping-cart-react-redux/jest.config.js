module.exports =   {
    verbose: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: [
      '**/src/**.(test|spec).(tsx|ts)'
    ],
    testEnvironment: "node",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ]
}