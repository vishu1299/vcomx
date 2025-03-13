// app/(page)/account/settings/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Settings, Upload, Lock, Bell, Shield } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Editprofile = () => {
  return (
    <div className="container mx-auto  max-w-4xl">
      <div className="flex items-center mb-8">
        <Settings className="w-6 h-6 mr-2 text-gray-700" />
        <h1 className="text-xl font-bold text-gray-800">Profile Settings</h1>
      </div>

      <div className="space-y-8">
        {/* Profile Information */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-medium text-gray-800">
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center space-y-3">
                <div className="relative w-24 h-24">
                  <Image
                    src="/src/Assets/Images/lady.png"
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-gray-200">
                    <Upload className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-orange border-orange h-8"
                >
                  Upload Photo
                </Button>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <Input type="date" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">
                        Prefer not to say
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-medium text-gray-800">
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between border-2 border-gray-100 p-4 rounded-lg">
              <div className="flex items-start space-x-3 ">
                <div className="mt-0.5">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-800 ">
                    Password
                  </h3>
                  <p className="text-xs text-gray-500">
                    Last changed 3 months ago
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="text-xs text-blue-500 border-blue-500 hover:bg-blue-50"
              >
                Change Password
              </Button>
            </div>

            <div className="flex items-center justify-between border-2 border-gray-100 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5">
                  <Shield className="w-5 h-5 text-gray-400 " />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-800">
                    Two-Factor Authentication
                  </h3>
                  <p className="text-xs text-gray-500">
                    Add an extra layer of security
                  </p>
                </div>
              </div>
              <Switch className="bg-blue-600" />
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-medium text-gray-800">
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between border-2 border-gray-100 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5">
                  <Bell className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-800">
                    Email Notifications
                  </h3>
                  <p className="text-xs text-gray-500">
                    Receive order updates and promotions
                  </p>
                </div>
              </div>
              <Switch defaultChecked className="bg-blue-600" />
            </div>

            <div className="flex items-center justify-between border-2 border-gray-100 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5">
                  <Bell className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-800">
                    Push Notifications
                  </h3>
                  <p className="text-xs text-gray-500">
                    Get alerts on your device
                  </p>
                </div>
              </div>
              <Switch defaultChecked className="bg-blue-600" />
            </div>

            <div className="flex items-center justify-between border-2 border-gray-100 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5">
                  <Bell className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-800">
                    SMS Notifications
                  </h3>
                  <p className="text-xs text-gray-500">
                    Receive text message updates
                  </p>
                </div>
              </div>
              <Switch defaultChecked className="bg-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Editprofile;
