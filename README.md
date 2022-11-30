<div align="center">
  <h1>node-gyp command not found</h1>
  <p>rules_js fails to build when adding testcontainers as a dependency</p>
</div>

# Reproduction

**Requirements**

- Node.js
- pnpm (`npm install -g pnpm`)
- Bazelisk (`npm install -g @bazel/bazelisk`)

**Setup**

- `pnpm i` (Install Node dependencies)

**Error**

- `bazelisk run //:bin` (Run app)

  ```
  INFO: Analyzed target //:bin (0 packages loaded, 0 targets configured).
  INFO: Found 1 target...
  ERROR: /home/flolu/Desktop/rules-js-node-gyp-error/BUILD.bazel:20:22: Running lifecycle hooks on npm package cpu-features@0.0.4 failed: (Exit 1): lifecycle-hooks.sh failed: error executing command (from target //:.aspect_rules_js/node_modules/cpu-features@0.0.4/lc) bazel-out/k8-opt-exec-2B5CBBC6/bin/external/aspect_rules_js/npm/private/lifecycle/lifecycle-hooks.sh cpu-features ../../../external/npm__cpu-features__0.0.4/package ... (remaining 1 argument skipped)
  /home/flolu/.cache/bazel/_bazel_flolu/8f204a9bf8f980884283ff5b6ddf7d91/execroot/__main__/bazel-out/k8-fastbuild/bin/external/aspect_rules_js/npm/private/lifecycle/min/node-gyp-bin/node-gyp: line 5: 1010: command not found
  Error: cpu-features@0.0.4 install: `node buildcheck.js > buildcheck.gypi && node-gyp rebuild`
  spawn ENOENT
      at ChildProcess.<anonymous> (/home/flolu/.cache/bazel/_bazel_flolu/8f204a9bf8f980884283ff5b6ddf7d91/execroot/__main__/bazel-out/k8-fastbuild/bin/external/aspect_rules_js/npm/private/lifecycle/min/index.min.js:1:79716)
      at ChildProcess.emit (node:events:394:28)
      at maybeClose (node:internal/child_process:1064:16)
      at Process.ChildProcess._handle.onexit (node:internal/child_process:301:5) {
    code: 'ELIFECYCLE',
    errno: 'ENOENT',
    syscall: 'spawn',
    file: 'sh',
    pkgid: 'cpu-features@0.0.4',
    stage: 'install',
    script: 'node buildcheck.js > buildcheck.gypi && node-gyp rebuild',
    pkgname: 'cpu-features'
  }

  > cpu-features@0.0.4 install /home/flolu/.cache/bazel/_bazel_flolu/8f204a9bf8f980884283ff5b6ddf7d91/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/cpu-features@0.0.4/node_modules/cpu-features
  > node buildcheck.js > buildcheck.gypi && node-gyp rebuild

  Target //:bin failed to build
  Use --verbose_failures to see the command lines of failed build steps.
  INFO: Elapsed time: 0.374s, Critical Path: 0.24s
  INFO: 4 processes: 2 internal, 1 linux-sandbox, 1 local.
  FAILED: Build did NOT complete successfully
  ERROR: Build failed. Not running target
  ```
