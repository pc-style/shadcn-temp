"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Settings, UploadCloud, Cpu, Gpu, Zap, Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [processingMode, setProcessingMode] = useState("upscaling");
  const [upscalingModel, setUpscalingModel] = useState("realesrgan");
  const [interpolationModel, setInterpolationModel] = useState("rife");
  const [outputResolution, setOutputResolution] = useState("2k");
  const [useGPU, setUseGPU] = useState(true);
  
  // Simulate file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 300);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] p-6 md:p-10 flex flex-col">
      <header className="flex flex-col md:flex-row items-center justify-between mb-10 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Video2X UI</h1>
          <p className="text-muted-foreground mt-1">AI-powered video upscaling and frame interpolation</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="en">
            <SelectTrigger className="w-[140px] backdrop-blur-md bg-card/20 border-border/50">
              <Languages className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="zh">简体中文</SelectItem>
              <SelectItem value="ja">日本語</SelectItem>
              <SelectItem value="pt">Português</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="de">Deutsch</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="backdrop-blur-md bg-card/20 border-border/50">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </header>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 backdrop-blur-lg bg-muted/20">
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="processing">Processing Mode</TabsTrigger>
          <TabsTrigger value="settings">Advanced Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-6">
          <Card className="backdrop-blur-xl bg-card/30 border-border/40 shadow-lg">
            <CardHeader>
              <CardTitle>Upload Video</CardTitle>
              <CardDescription>
                Upload your video for AI enhancement. Supported formats: MP4, MKV, AVI, WEBM, and more.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer border-border/50 bg-muted/10 hover:bg-muted/20 transition-all">
                  {!selectedFile ? (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-12 h-12 mb-4 text-muted-foreground" />
                      <p className="mb-2 text-sm text-muted-foreground">Drag and drop your video here, or click to browse</p>
                      <p className="text-xs text-muted-foreground">MP4, MOV, or AVI (max 500MB)</p>
                    </div>
                  ) : uploadProgress < 100 ? (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <div className="w-48 h-2 mb-4 bg-muted/30 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-300 ease-out" 
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-muted-foreground">Uploading {selectedFile.name}...</p>
                      <p className="text-xs text-muted-foreground">{uploadProgress}% complete</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <CheckCircle2 className="w-12 h-12 mb-4 text-primary" />
                      <p className="mb-2 text-sm">Successfully uploaded!</p>
                      <p className="text-xs text-muted-foreground">{selectedFile.name}</p>
                    </div>
                  )}
                  <input 
                    id="dropzone-file" 
                    type="file" 
                    className="hidden" 
                    accept="video/mp4,video/mov,video/avi"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button disabled={!selectedFile || uploadProgress < 100}>
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="backdrop-blur-md bg-card/20 border-border/40">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gpu className="h-5 w-5 mr-2 text-primary" />
                  Hardware Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">CPU Requirements:</h4>
                  <p className="text-sm text-muted-foreground">Intel Haswell (2013) or newer / AMD Excavator (2015) or newer with AVX2 support</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">GPU Requirements:</h4>
                  <p className="text-sm text-muted-foreground">GPU with Vulkan support: NVIDIA GTX 600+ (2012), AMD HD 7000+ (2012), or Intel HD 4000+ (2012)</p>
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <Switch id="use-gpu" checked={useGPU} onCheckedChange={setUseGPU} />
                  <Label htmlFor="use-gpu" className="text-sm font-medium">Use GPU Acceleration (Recommended)</Label>
                </div>
              </CardContent>
            </Card>
            
            <Card className="backdrop-blur-md bg-card/20 border-border/40">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Processing Mode
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="upscaling" value={processingMode} onValueChange={setProcessingMode} className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="upscaling" id="upscaling" />
                    <Label htmlFor="upscaling" className="font-medium">Upscaling</Label>
                    <p className="text-xs text-muted-foreground ml-1">(Increase resolution)</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="interpolation" id="interpolation" />
                    <Label htmlFor="interpolation" className="font-medium">Frame Interpolation</Label>
                    <p className="text-xs text-muted-foreground ml-1">(Increase frame rate)</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both" className="font-medium">Both</Label>
                    <p className="text-xs text-muted-foreground ml-1">(Upscale and interpolate)</p>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="processing" className="space-y-6">
          <Card className="backdrop-blur-xl bg-card/30 border-border/40 shadow-lg">
            <CardHeader>
              <CardTitle>AI Processing Models</CardTitle>
              <CardDescription>
                Select the AI models for video processing. Different models excel at different types of content.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Upscaling Models</h3>
                <RadioGroup defaultValue="realesrgan" value={upscalingModel} onValueChange={setUpscalingModel} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-2 backdrop-blur-md bg-card/10 p-3 rounded-lg border border-border/30">
                    <RadioGroupItem value="realesrgan" id="realesrgan" className="mt-1" />
                    <div>
                      <Label htmlFor="realesrgan" className="font-medium">Real-ESRGAN</Label>
                      <p className="text-xs text-muted-foreground">General purpose model, good for photographs and realistic content</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 backdrop-blur-md bg-card/10 p-3 rounded-lg border border-border/30">
                    <RadioGroupItem value="realcugan" id="realcugan" className="mt-1" />
                    <div>
                      <Label htmlFor="realcugan" className="font-medium">Real-CUGAN</Label>
                      <p className="text-xs text-muted-foreground">Specialized for anime and cartoon content</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 backdrop-blur-md bg-card/10 p-3 rounded-lg border border-border/30">
                    <RadioGroupItem value="anime4k" id="anime4k" className="mt-1" />
                    <div>
                      <Label htmlFor="anime4k" className="font-medium">Anime4K v4</Label>
                      <p className="text-xs text-muted-foreground">Fast upscaler optimized for anime content</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 backdrop-blur-md bg-card/10 p-3 rounded-lg border border-border/30">
                    <RadioGroupItem value="customshader" id="customshader" className="mt-1" />
                    <div>
                      <Label htmlFor="customshader" className="font-medium">Custom GLSL Shader</Label>
                      <p className="text-xs text-muted-foreground">Use your own MPV-compatible GLSL shader</p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Frame Interpolation Models</h3>
                <RadioGroup defaultValue="rife" value={interpolationModel} onValueChange={setInterpolationModel} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-2 backdrop-blur-md bg-card/10 p-3 rounded-lg border border-border/30">
                    <RadioGroupItem value="rife" id="rife" className="mt-1" />
                    <div>
                      <Label htmlFor="rife" className="font-medium">RIFE</Label>
                      <p className="text-xs text-muted-foreground">State-of-the-art interpolation for smooth motion</p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Output Resolution</h3>
                <RadioGroup defaultValue="2k" value={outputResolution} onValueChange={setOutputResolution} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2 backdrop-blur-md bg-card/10 p-3 rounded-lg border border-border/30">
                    <RadioGroupItem value="2k" id="2k" />
                    <div>
                      <Label htmlFor="2k" className="font-medium">2K (1440p)</Label>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 backdrop-blur-md bg-card/10 p-3 rounded-lg border border-border/30">
                    <RadioGroupItem value="4k" id="4k" />
                    <div>
                      <Label htmlFor="4k" className="font-medium">4K (2160p)</Label>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 backdrop-blur-md bg-card/10 p-3 rounded-lg border border-border/30">
                    <RadioGroupItem value="8k" id="8k" />
                    <div>
                      <Label htmlFor="8k" className="font-medium">8K (4320p)</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Zap className="mr-2 h-4 w-4" /> Apply Processing Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card className="backdrop-blur-xl bg-card/30 border-border/40 shadow-lg">
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
              <CardDescription>
                Fine-tune advanced processing parameters for optimal results.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Video2X Engine Settings</h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Denoise Level</label>
                      <span className="text-sm text-muted-foreground">3</span>
                    </div>
                    <Slider defaultValue={[3]} max={5} step={1} />
                    <p className="text-xs text-muted-foreground">Higher values provide more noise reduction but may reduce detail</p>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Upscale Factor</label>
                      <span className="text-sm text-muted-foreground">2x</span>
                    </div>
                    <Slider defaultValue={[2]} min={1} max={4} step={1} />
                    <p className="text-xs text-muted-foreground">How many times to upscale the original resolution</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Processing Settings</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium flex items-center">
                        <Cpu className="h-4 w-4 mr-1" /> Processor Threads
                      </label>
                      <span className="text-sm text-muted-foreground">Auto</span>
                    </div>
                    <Select defaultValue="auto">
                      <SelectTrigger>
                        <SelectValue placeholder="Select threads" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Auto (Recommended)</SelectItem>
                        <SelectItem value="2">2 Threads</SelectItem>
                        <SelectItem value="4">4 Threads</SelectItem>
                        <SelectItem value="8">8 Threads</SelectItem>
                        <SelectItem value="16">16 Threads</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center space-x-2 pt-3">
                    <Switch id="preview" defaultChecked />
                    <Label htmlFor="preview">
                      Enable Processing Preview
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 pt-1">
                    <Switch id="preserve-audio" defaultChecked />
                    <Label htmlFor="preserve-audio">
                      Preserve Original Audio
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 pt-1">
                    <Switch id="preserve-metadata" defaultChecked />
                    <Label htmlFor="preserve-metadata">
                      Preserve Video Metadata
                    </Label>
                  </div>
                </div>
              </div>
              
              <div className="pt-2">
                <h3 className="font-medium mb-2">Output Format</h3>
                <Select defaultValue="mp4">
                  <SelectTrigger>
                    <SelectValue placeholder="Select output format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mp4">MP4 (H.264)</SelectItem>
                    <SelectItem value="mp4-hevc">MP4 (H.265/HEVC)</SelectItem>
                    <SelectItem value="mkv">MKV</SelectItem>
                    <SelectItem value="webm">WebM (VP9)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Advanced Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <footer className="mt-auto pt-10 text-center text-sm text-muted-foreground">
        <p>© 2025 Video2X UI. Powered by <a href="https://github.com/k4yt3x/video2x" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">video2x</a>.</p>
      </footer>
    </div>
  );
}
