import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Bell,
  MessageSquare,
  RefreshCw,
  Clock,
  AlertCircle,
  AlertTriangle,
} from "lucide-react";

interface NotificationCategoryProps {
  title: string;
  description: string;
  enabled: boolean;
  icon: React.ReactNode;
  onToggle: () => void;
}

const NotificationCategory: React.FC<NotificationCategoryProps> = ({
  title,
  description,
  enabled,
  icon,
  onToggle,
}) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-start space-x-4">
        <div className="mt-0.5 text-gray-500">{icon}</div>
        <div className="space-y-1">
          <h3 className="font-medium text-base">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <Switch
        checked={enabled}
        onCheckedChange={onToggle}
        className="data-[state=checked]:bg-orange"
      />
    </div>
  );
};

const NotificationSettings: React.FC = () => {
  const [categories, setCategories] = useState([
    {
      title: "Notifications",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
      enabled: true,
      icon: <Bell size={20} />,
    },
    {
      title: "Messages",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      enabled: true,
      icon: <MessageSquare size={20} />,
    },
    {
      title: "Updates",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      enabled: false,
      icon: <RefreshCw size={20} />,
    },
    {
      title: "Reminders",
      description:
        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
      enabled: true,
      icon: <Clock size={20} />,
    },
    {
      title: "Alerts",
      description:
        "Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi.",
      enabled: true,
      icon: <AlertCircle size={20} />,
    },
    {
      title: "Warnings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      enabled: true,
      icon: <AlertTriangle size={20} />,
    },
  ]);

  const toggleCategory = (index: number) => {
    setCategories((prev) =>
      prev.map((category, i) =>
        i === index ? { ...category, enabled: !category.enabled } : category
      )
    );
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl">Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {categories.map((category, index) => (
            <React.Fragment key={category.title}>
              <NotificationCategory
                {...category}
                onToggle={() => toggleCategory(index)}
              />
              {index < categories.length - 1 && (
                <div className="border-t border-gray-100" />
              )}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
