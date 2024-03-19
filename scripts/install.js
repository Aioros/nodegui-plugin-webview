#!/usr/bin/env node

const { setupArtifact } = require("@nodegui/artifact-installer");
const {
  miniQt,
  useCustomQt,
  qtHome
} = require("@nodegui/nodegui/config/qtConfig");
const os = require("os");
const path = require("path");
const fs = require("fs");

const checkIfExists = fullPath => {
  return () => fs.existsSync(fullPath);
};

function getMiniQtWebviewArtifacts() {
  if (miniQt.version !== "6.4.1") {
    throw new Error(
      `Unsupported miniqt version ${miniQt.version}. Please raise an issue ticket on the plugin repo. This plugin only supports miniQt version 6.4.1, the author of the plugin will need to update the download links.`
    );
  }

  switch (os.platform()) {
    case "darwin": {
      return {
        artifacts: [
          {
            name: "Qt WebEngine",
            link: `https://download.qt.io/online/qtsdkrepository/mac_x64/desktop/qt6_641/qt.qt6.641.addons.qtwebengine.clang_64/6.4.1-0-202211101256qtwebengine-MacOS-MacOS_12-Clang-MacOS-MacOS_12-X86_64-ARM64.7z`,
            skipSetup: checkIfExists(
              path.resolve(
                qtHome,
                "lib",
                "cmake",
                "Qt6WebEngineQuick",
                "Qt6WebEngineQuickConfig.cmake"
              )
            )
          },
          {
            name: "Qt Declarative",
            link: `https://download.qt.io/online/qtsdkrepository/mac_x64/desktop/qt6_641/qt.qt6.641.clang_64/6.4.1-0-202211101256qtdeclarative-MacOS-MacOS_12-Clang-MacOS-MacOS_12-X86_64-ARM64.7z`,
            skipSetup: checkIfExists(path.resolve(qtHome, "bin", "qmlmin"))
          },
          {
            name: "Qt WebChannel",
            link: `https://download.qt.io/online/qtsdkrepository/mac_x64/desktop/qt6_641/qt.qt6.641.addons.qtwebchannel.clang_64/6.4.1-0-202211101256qtwebchannel-MacOS-MacOS_12-Clang-MacOS-MacOS_12-X86_64-ARM64.7z`,
            skipSetup: checkIfExists(
              path.resolve(
                qtHome,
                "lib",
                "cmake",
                "Qt6WebChannel",
                "Qt6WebChannelConfig.cmake"
              )
            )
          },
          {
            name: "Qt Positioning",
            link: `https://download.qt.io/online/qtsdkrepository/mac_x64/desktop/qt6_641/qt.qt6.641.addons.qtpositioning.clang_64/6.4.1-0-202211101256qtpositioning-MacOS-MacOS_12-Clang-MacOS-MacOS_12-X86_64-ARM64.7z`,
            skipSetup: checkIfExists(
              path.resolve(
                qtHome,
                "lib",
                "cmake",
                "Qt6Positioning",
                "Qt6Positioning.cmake"
              )
            )
          }/*,
          {
            name: "Qt Location",
            link: `https://download.qt.io/online/qtsdkrepository/mac_x64/desktop/qt5_5141/qt.qt5.5141.clang_64/5.14.1-0-202001241000qtlocation-MacOS-MacOS_10_13-Clang-MacOS-MacOS_10_13-X86_64.7z`,
            skipSetup: checkIfExists(
              path.resolve(
                qtHome,
                "lib",
                "cmake",
                "Qt5Location",
                "Qt5LocationConfig.cmake"
              )
            )
          }*/
        ]
      };
    }
    case "win32": {
      return {
        artifacts: [
          {
            name: "Qt WebEngine",
            link: `https://download.qt.io/online/qtsdkrepository/windows_x86/desktop/qt6_641/qt.qt6.641.addons.qtwebengine.win64_msvc2019_64/6.4.1-0-202211101254qtwebengine-Windows-Windows_10_21H2-MSVC2019-Windows-Windows_10_21H2-X86_64.7z`,
            skipSetup: checkIfExists(
              path.resolve(
                qtHome,
                "lib",
                "cmake",
                "Qt6WebEngineQuick",
                "Qt6WebEngineQuickConfig.cmake"
              )
            )
          },
          {
            name: "Qt Declarative",
            link: `https://download.qt.io/online/qtsdkrepository/windows_x86/desktop/qt6_641/qt.qt6.641.win64_msvc2019_64/6.4.1-0-202211101254qtdeclarative-Windows-Windows_10_21H2-MSVC2019-Windows-Windows_10_21H2-X86_64.7z`,
            skipSetup: checkIfExists(path.resolve(qtHome, "bin", "Qt6Qml.dll"))
          },
          {
            name: "Qt WebChannel",
            link: `https://download.qt.io/online/qtsdkrepository/windows_x86/desktop/qt6_641/qt.qt6.641.addons.qtwebchannel.win64_msvc2019_64/6.4.1-0-202211101254qtwebchannel-Windows-Windows_10_21H2-MSVC2019-Windows-Windows_10_21H2-X86_64.7z`,
            skipSetup: checkIfExists(
              path.resolve(qtHome, "bin", "Qt6WebChannel.dll")
            )
          },
          {
            name: "Qt Positioning",
            link: `https://download.qt.io/online/qtsdkrepository/windows_x86/desktop/qt6_641/qt.qt6.641.addons.qtpositioning.win64_msvc2019_64/6.4.1-0-202211101254qtpositioning-Windows-Windows_10_21H2-MSVC2019-Windows-Windows_10_21H2-X86_64.7z`,
            skipSetup: checkIfExists(
              path.resolve(qtHome, "bin", "Qt6Positioning.dll")
            )
          }/*,
          {
            name: "Qt Location",
            link: `https://download.qt.io/online/qtsdkrepository/windows_x86/desktop/qt5_5141/qt.qt5.5141.win64_msvc2017_64/5.14.1-0-202001240957qtlocation-Windows-Windows_10-MSVC2017-Windows-Windows_10-X86_64.7z`,
            skipSetup: checkIfExists(
              path.resolve(qtHome, "bin", "Qt5Location.dll")
            )
          }*/
        ]
      };
    }
    case "linux": {
      return {
        artifacts: [
          {
            name: "Qt WebEngine",
            link: `https://download.qt.io/online/qtsdkrepository/linux_x64/desktop/qt6_641/qt.qt6.641.addons.qtwebengine.gcc_64/6.4.1-0-202211101305qtwebengine-Linux-RHEL_8_4-GCC-Linux-RHEL_8_4-X86_64.7z`,
            skipSetup: checkIfExists(
              path.resolve(qtHome, "bin", "Qt6Location.dll")
            )
          },
          {
            name: "Qt Declarative",
            link: `https://download.qt.io/online/qtsdkrepository/linux_x64/desktop/qt6_641/qt.qt6.641.gcc_64/6.4.1-0-202211101305qtdeclarative-Linux-RHEL_8_4-GCC-Linux-RHEL_8_4-X86_64.7z`,
            skipSetup: checkIfExists(path.resolve(qtHome, "bin", "qmlmin"))
          },
          {
            name: "Qt WebChannel",
            link: `https://download.qt.io/online/qtsdkrepository/linux_x64/desktop/qt6_641/qt.qt6.641.addons.qtwebchannel.gcc_64/6.4.1-0-202211101305qtwebchannel-Linux-RHEL_8_4-GCC-Linux-RHEL_8_4-X86_64.7z`,
            skipSetup: checkIfExists(
              path.resolve(
                qtHome,
                "lib",
                "cmake",
                "Qt6WebChannel",
                "Qt6WebChannelConfig.cmake"
              )
            )
          },
          {
            name: "Qt Positioning",
            link: `https://download.qt.io/online/qtsdkrepository/linux_x64/desktop/qt6_641/qt.qt6.641.addons.qtpositioning.gcc_64/6.4.1-0-202211101305qtpositioning-Linux-RHEL_8_4-GCC-Linux-RHEL_8_4-X86_64.7z`,
            skipSetup: checkIfExists(
              path.resolve(
                qtHome,
                "lib",
                "cmake",
                "Qt6Positioning",
                "Qt6PositioningConfig.cmake"
              )
            )
          }/*,
          {
            name: "Qt Location",
            link: `https://download.qt.io/online/qtsdkrepository/linux_x64/desktop/qt5_5141/qt.qt5.5141.gcc_64/5.14.1-0-202001240953qtlocation-Linux-RHEL_7_6-GCC-Linux-RHEL_7_6-X86_64.7z`,
            skipSetup: checkIfExists(
              path.resolve(
                qtHome,
                "lib",
                "cmake",
                "Qt5Location",
                "Qt5LocationConfig.cmake"
              )
            )
          }*/
        ]
      };
    }
  }
}

async function setupQt() {
  const webviewArtifacts = getMiniQtWebviewArtifacts();
  return Promise.all(
    webviewArtifacts.artifacts.map(async artifact =>
      setupArtifact({
        outDir: miniQt.setupDir,
        id: "nodegui-mini-qtwebview", //cache-id
        displayName: `${artifact.name} for Minimal Qt: ${miniQt.version} installation`,
        downloadLink: artifact.link,
        skipSetup: artifact.skipSetup
      })
    )
  );
}

if (!useCustomQt) {
  console.log(`Minimal Qt ${miniQt.version} setup:`);

  setupQt().catch(err => {
    console.error(err);
    process.exit(1);
  });
} else {
  console.log(
    `CustomQt detected at ${qtHome} . Hence, skipping Mini Qt installation...`
  );
}
