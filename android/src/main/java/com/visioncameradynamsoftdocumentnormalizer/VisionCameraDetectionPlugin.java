package com.visioncameradynamsoftdocumentnormalizer;
import androidx.camera.core.ImageProxy;
import com.mrousavy.camera.frameprocessor.FrameProcessorPlugin;

public class VisionCameraDetectionPlugin extends FrameProcessorPlugin {

    @Override
    public Object callback(ImageProxy image, Object[] params) {
        // code goes here
        return null;
    }

    VisionCameraDetectionPlugin() {
        super("detect");
    }
}
