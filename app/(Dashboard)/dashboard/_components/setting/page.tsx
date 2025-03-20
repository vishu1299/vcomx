"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  User,
  Bell,
  Users,
  Settings,
  HelpCircle,
  Eye,
  EyeOff,
} from "lucide-react";
import Helpcenter from "./helpcenter";
import NotificationSettings from "./notification";
import CampaignReviewList from "./manageReviews";
import StreamConfigurationSettings from "./livestream";

// Profile form schema
const profileFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phoneNumber: z
    .string()
    .regex(/^\+?[0-9]{10,14}$/, "Please enter a valid phone number"),
  emailAddress: z.string().email("Please enter a valid email address"),
  city: z.string().min(1, "Please select a city"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Please select a country"),
  website: z.string().url("Please enter a valid URL").or(z.string().length(0)),
  aboutMe: z.string().optional(),
});

// Password form schema
const passwordFormSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character"
      ),
    repeatNewPassword: z.string().min(1, "Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.repeatNewPassword, {
    message: "Passwords do not match",
    path: ["repeatNewPassword"],
  });

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState(
    "Edit Profile Information"
  );
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  // Profile form
  const profileForm = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: "Helena",
      lastName: "Brauer",
      phoneNumber: "+19846499950",
      emailAddress: "dashboard@comvi.com",
      city: "California",
      postalCode: "",
      country: "United States",
      website: "comvi-dashboard.com",
      aboutMe: "Text",
    },
  });

  // Password form
  const passwordForm = useForm<z.infer<typeof passwordFormSchema>>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      repeatNewPassword: "",
    },
  });

  // Submit handlers
  const onProfileSubmit = (data: z.infer<typeof profileFormSchema>) => {
    console.log("Profile data submitted:", data);
    // Here you would send the data to your API
  };

  const onPasswordSubmit = (data: z.infer<typeof passwordFormSchema>) => {
    console.log("Password data submitted:", data);
    // Here you would send the data to your API
  };

  const sidebarItems = {
    profile: [
      {
        icon: <User className="h-6 w-6 text-orange" />,
        title: "Edit Profile Information",
        description: "Update your personal details and account information",
        id: "edit-profile",
      },
      {
        icon: <Bell className="h-6 w-6 text-orange" />,
        title: "Notifications",
        description: "Control how you receive alerts and updates",
        id: "notifications",
      },
    ],
    general: [
      {
        icon: <Users className="h-6 w-6 text-orange" />,
        title: "Manage Reviews",
        description: "View and respond to feedback from your customers",
        id: "manage-reviews",
      },
      {
        icon: <Settings className="h-6 w-6 text-orange" />,
        title: "Live Setting",
        description: "Configure real-time settings and preferences",
        id: "live-setting",
      },
      {
        icon: <HelpCircle className="h-6 w-6 text-orange" />,
        title: "Help Centre",
        description: "Find answers and resources for common questions",
        id: "help-centre",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <h1 className="text-2xl font-bold mb-8">Setting</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Section */}
          <div>
            <Card className="shadow-sm">
              <h2 className="text-xl font-semibold p-6">Profile</h2>
              <CardContent className="p-0">
                {sidebarItems.profile.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-start gap-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors border ${
                      activeSection === item.id ? "bg-gray-50" : ""
                    }`}
                    onClick={() => setActiveSection(item.title)}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* General Settings Section */}
          <div>
            <Card className="shadow-sm">
              <h2 className="text-xl font-semibold  p-6">General Settings</h2>
              <CardContent className="p-0">
                {sidebarItems.general.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-start gap-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors border ${
                      activeSection === item.id ? "bg-gray-50" : ""
                    }`}
                    onClick={() => setActiveSection(item.title)}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Panel - Forms */}
        <div className="lg:col-span-2">
          {activeSection === "Edit Profile Information" && (
            <div className="space-y-8">
              {/* Edit Profile Form */}
              <div>
                <h2 className="text-xl font-semibold mb-6">Edit Profile</h2>
                <Form {...profileForm}>
                  <form
                    onSubmit={profileForm.handleSubmit(onProfileSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* First Name */}
                      <FormField
                        control={profileForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-gray-500 uppercase">
                              First Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter first name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Last Name */}
                      <FormField
                        control={profileForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-gray-500 uppercase">
                              Last Name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Enter last name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Phone Number */}
                      <FormField
                        control={profileForm.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-gray-500 uppercase">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter phone number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Email Address */}
                      <FormField
                        control={profileForm.control}
                        name="emailAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-gray-500 uppercase">
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter email address"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* City */}
                      <FormField
                        control={profileForm.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-gray-500 uppercase">
                              City
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select City" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="California">
                                  California
                                </SelectItem>
                                <SelectItem value="New York">
                                  New York
                                </SelectItem>
                                <SelectItem value="Texas">Texas</SelectItem>
                                <SelectItem value="Florida">Florida</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Postal Code */}
                      <FormField
                        control={profileForm.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-gray-500 uppercase">
                              Postal Code
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Your Postal Code" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="90001">90001</SelectItem>
                                <SelectItem value="90002">90002</SelectItem>
                                <SelectItem value="90003">90003</SelectItem>
                                <SelectItem value="90004">90004</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Country */}
                      <FormField
                        control={profileForm.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-gray-500 uppercase">
                              Country
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="United States">
                                  United States
                                </SelectItem>
                                <SelectItem value="Canada">Canada</SelectItem>
                                <SelectItem value="United Kingdom">
                                  United Kingdom
                                </SelectItem>
                                <SelectItem value="Australia">
                                  Australia
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Website */}
                      <FormField
                        control={profileForm.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-gray-500 uppercase">
                              Website
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter website URL"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* About Me */}
                    <FormField
                      control={profileForm.control}
                      name="aboutMe"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs text-gray-500 uppercase">
                            About Me
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Write a short bio about yourself"
                              className="resize-none"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-orange hover:bg-orange text-white"
                      >
                        Update Profile
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>

              {/* Change Password Section */}
              <div>
                <h2 className="text-xl font-semibold mb-6">Change Password</h2>
                <Form {...passwordForm}>
                  <form
                    onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Current Password */}
                      <FormField
                        control={passwordForm.control}
                        name="currentPassword"
                        render={({ field }) => (
                          <FormItem className="col-span-1 md:col-span-2">
                            <FormLabel className="text-xs text-gray-500 uppercase">
                              Current Password
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  type={
                                    showCurrentPassword ? "text" : "password"
                                  }
                                  placeholder="••••••••"
                                  {...field}
                                />
                                <button
                                  type="button"
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                  onClick={() =>
                                    setShowCurrentPassword(!showCurrentPassword)
                                  }
                                >
                                  {showCurrentPassword ? (
                                    <EyeOff className="h-4 w-4 text-gray-500" />
                                  ) : (
                                    <Eye className="h-4 w-4 text-gray-500" />
                                  )}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* New Password */}
                      <FormField
                        control={passwordForm.control}
                        name="newPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-gray-500 uppercase">
                              New Password
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  type={showNewPassword ? "text" : "password"}
                                  placeholder="Enter New Password"
                                  {...field}
                                />
                                <button
                                  type="button"
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                  onClick={() =>
                                    setShowNewPassword(!showNewPassword)
                                  }
                                >
                                  {showNewPassword ? (
                                    <EyeOff className="h-4 w-4 text-gray-500" />
                                  ) : (
                                    <Eye className="h-4 w-4 text-gray-500" />
                                  )}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Repeat New Password */}
                      <FormField
                        control={passwordForm.control}
                        name="repeatNewPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-gray-500 uppercase">
                              Repeat New Password
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  type={
                                    showRepeatPassword ? "text" : "password"
                                  }
                                  placeholder="Repeat New Password"
                                  {...field}
                                />
                                <button
                                  type="button"
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                  onClick={() =>
                                    setShowRepeatPassword(!showRepeatPassword)
                                  }
                                >
                                  {showRepeatPassword ? (
                                    <EyeOff className="h-4 w-4 text-gray-500" />
                                  ) : (
                                    <Eye className="h-4 w-4 text-gray-500" />
                                  )}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-orange hover:bg-orange text-white"
                      >
                        Change Password
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          )}

          {/* Display placeholder content for other sections */}
          {activeSection === "Help Centre" && <Helpcenter />}
          {activeSection === "Notifications" && <NotificationSettings />}
          {activeSection === "Manage Reviews" && <CampaignReviewList />}
          {activeSection === "Live Setting" && <StreamConfigurationSettings />}
        </div>
      </div>
    </div>
  );
}
