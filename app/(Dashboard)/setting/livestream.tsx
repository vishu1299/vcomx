// StreamConfigurationSettings.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye } from "lucide-react";

const StreamConfigurationSettings: React.FC = () => {
  return (
    <div className="bg-white p-6 space-y-8">
      {/* Stream Configuration Section */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Stream Configuration</h1>
        <Card className="border border-gray-200">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    STREAM KEY
                  </label>
                  <Button variant="ghost" className="text-orange h-auto p-0">
                    RESET STREAM KEY
                  </Button>
                </div>
                <div className="relative">
                  <Input placeholder="Enter Report Name" className="pr-10" />
                  <Button
                    variant="ghost"
                    className="absolute right-0 top-0 h-full px-3 text-gray-400"
                  >
                    <Eye className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  VIDEO QUALITY
                </label>
                <Select defaultValue="1080p60">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="1080p 60fps" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1080p60">1080p 60fps</SelectItem>
                    <SelectItem value="1080p30">1080p 30fps</SelectItem>
                    <SelectItem value="720p60">720p 60fps</SelectItem>
                    <SelectItem value="720p30">720p 30fps</SelectItem>
                    <SelectItem value="480p30">480p 30fps</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ecommerce & Chat Integration Section */}
      <div>
        <h1 className="text-2xl font-bold mb-4">
          Ecommerce & Chat Integration
        </h1>
        <Card className="border border-gray-200">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    STORE URL
                  </label>
                  <Button variant="ghost" className="text-orange h-auto p-0">
                    RESET STREAM KEY
                  </Button>
                </div>
                <Input placeholder="Enter Store URL" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  CHAT MODERATION
                </label>
                <Select defaultValue="strict">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Strict" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="strict">Strict</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="relaxed">Relaxed</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Toggle Options */}
      <div className="space-y-4">
        <div className="flex items-center justify-between py-2">
          <label className="text-base font-medium">Product sync</label>
          <Switch defaultChecked className="data-[state=checked]:bg-orange" />
        </div>

        <div className="flex items-center justify-between py-2">
          <label className="text-base font-medium">Auto-moderation</label>
          <Switch defaultChecked className="data-[state=checked]:bg-orange" />
        </div>

        <div className="flex items-center justify-between py-2">
          <label className="text-base font-medium">Email Notification</label>
          <Switch className="data-[state=checked]:bg-orange" />
        </div>

        <div className="flex items-center justify-between py-2">
          <label className="text-base font-medium">Stream start reminder</label>
          <Switch defaultChecked className="data-[state=checked]:bg-orange" />
        </div>
      </div>
    </div>
  );
};

export default StreamConfigurationSettings;
