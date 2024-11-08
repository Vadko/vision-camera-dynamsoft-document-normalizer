import { NativeModules, Platform } from 'react-native';
import { VisionCameraProxy } from 'react-native-vision-camera';
const LINKING_ERROR = `The package 'vision-camera-dynamsoft-document-normalizer' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo managed workflow\n';
const VisionCameraDynamsoftDocumentNormalizer = NativeModules.VisionCameraDynamsoftDocumentNormalizer ? NativeModules.VisionCameraDynamsoftDocumentNormalizer : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});

/**
 * Init the license of Dynamsoft Document Normalizer
 */
export function initLicense(license) {
  return VisionCameraDynamsoftDocumentNormalizer.initLicense(license);
}

/**
 * Init the runtime settings from a JSON template
 */
export function initRuntimeSettingsFromString(template) {
  return VisionCameraDynamsoftDocumentNormalizer.initRuntimeSettingsFromString(template);
}

/**
 * Detect documents in an image file
 */
export function detectFile(url) {
  return VisionCameraDynamsoftDocumentNormalizer.detectFile(url);
}

/**
 * Normalize an image file
 */
export function normalizeFile(url, quad, config) {
  return VisionCameraDynamsoftDocumentNormalizer.normalizeFile(url, quad, config);
}

/**
 * Rotate an image file. Android only.
 */
export function rotateFile(url, degrees) {
  return VisionCameraDynamsoftDocumentNormalizer.rotateFile(url, degrees);
}

/**
 * Config of whether to save the normalized as a file and base64.
 */

/**
 * Normalization result containing the image path or base64
 */

const plugin = VisionCameraProxy.initFrameProcessorPlugin('detect', {});

/**
 * Detect documents from the camera preview
 */
export function detect(frame, template) {
  'worklet';

  if (plugin == null) throw new Error('Failed to load Frame Processor Plugin "detect"!');
  if (template) {
    let record = {};
    record["template"] = template;
    return plugin.call(frame, record);
  } else {
    return plugin.call(frame);
  }
}
//# sourceMappingURL=index.js.map