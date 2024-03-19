#include <napi.h>
#include <QtWebEngineQuick>

Napi::Object Main(Napi::Env env, Napi::Object exports) {
  QtWebEngineQuick::initialize();
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Main)
