import { type Frame } from 'react-native-vision-camera';
/**
 * Init the license of Dynamsoft Document Normalizer
 */
export declare function initLicense(license: string): Promise<boolean>;
/**
 * Init the runtime settings from a JSON template
 */
export declare function initRuntimeSettingsFromString(template: string): Promise<boolean>;
/**
 * Detect documents in an image file
 */
export declare function detectFile(url: string): Promise<DetectedQuadResult[]>;
/**
 * Normalize an image file
 */
export declare function normalizeFile(url: string, quad: Quadrilateral, config: NormalizationConfig): Promise<NormalizedImageResult>;
/**
 * Rotate an image file. Android only.
 */
export declare function rotateFile(url: string, degrees: number): Promise<NormalizedImageResult>;
/**
 * Config of whether to save the normalized as a file and base64.
 */
export interface NormalizationConfig {
    saveNormalizationResultAsFile?: boolean;
    includeNormalizationResultAsBase64?: boolean;
}
/**
 * Normalization result containing the image path or base64
 */
export interface NormalizedImageResult {
    imageURL?: string;
    imageBase64?: string;
}
export interface DetectedQuadResult {
    location: Quadrilateral;
    confidenceAsDocumentBoundary: number;
    area: number;
}
export interface Point {
    x: number;
    y: number;
}
export interface Quadrilateral {
    points: [Point, Point, Point, Point];
}
export interface Rect {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
}
/**
 * Detect documents from the camera preview
 */
export declare function detect(frame: Frame, template?: string): Record<string, DetectedQuadResult>;
//# sourceMappingURL=index.d.ts.map