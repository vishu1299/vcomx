import React from "react";

const CreatePost = () => {
  return (
    <div className="bg-gray-50 min-h-screen ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-semibold mb-6">Create Post</h1>

        {/* General Section */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
          <h3 className="text-lg font-medium mb-4">General</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium" htmlFor="postTitle">
                Post Title <span className="text-red-500">*</span>
              </label>
              <input
                id="postTitle"
                type="text"
                className="w-full p-3 mt-2 border rounded-lg text-sm"
                placeholder="Enter post title"
              />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="urlSlug">
                URL Slug
              </label>
              <input
                id="urlSlug"
                type="text"
                className="w-full p-3 mt-2 border rounded-lg text-sm"
                placeholder="Enter URL slug"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm font-medium" htmlFor="category">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                className="w-full p-3 mt-2 border rounded-lg text-sm"
              >
                <option>Choose</option>
                <option>Tech</option>
                <option>Sports</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="visibility">
                Visibility <span className="text-red-500">*</span>
              </label>
              <select
                id="visibility"
                className="w-full p-3 mt-2 border rounded-lg text-sm"
              >
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium" htmlFor="description">
              Description <span className="text-red-500">*</span>
            </label>
            {/* Text Editor for Description */}
            <div className="w-full border rounded-lg p-3 mt-2 bg-gray-50 h-36 text-sm">
              <textarea
                id="description"
                className="w-full h-full bg-transparent border-none focus:outline-none"
                placeholder="Type your description..."
              />
            </div>
          </div>
        </div>

        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Meta Options */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-medium mb-4">Meta Options</h3>
            <div className="mb-4">
              <label className="text-sm font-medium" htmlFor="pageTitle">
                Page Title <span className="text-red-500">*</span>
              </label>
              <input
                id="pageTitle"
                type="text"
                className="w-full p-3 mt-2 border rounded-lg text-sm"
                placeholder="Enter page title"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium" htmlFor="metaDescription">
                Description <span className="text-red-500">*</span>
              </label>
              {/* Text Editor for Meta Description */}
              <div className="w-full border rounded-lg p-3 mt-2 bg-gray-50 h-24 text-sm">
                <textarea
                  id="metaDescription"
                  className="w-full h-full bg-transparent border-none focus:outline-none"
                  placeholder="Type your description..."
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="keywords">
                Keywords <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2 flex-wrap mt-2">
                <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm">
                  fps game ❌
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-lg text-sm">
                  online ❌
                </span>
              </div>
            </div>
          </div>

          {/* Media Upload */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-medium mb-4">
              Media <span className="text-red-500">*</span>
            </h3>
            <div className="border-dashed border-2 border-gray-300 rounded-lg p-12 text-center bg-gray-50 h-64 flex flex-col justify-center items-center">
              <p className="text-sm text-gray-500">Drag & Drop</p>
              <p className="text-sm text-orange mt-2 cursor-pointer">
                Browse Photo
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Supports: *.png, *.jpg, *.jpeg
              </p>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-medium mb-4">Settings</h3>
            <div className="mb-4">
              <label className="text-sm font-medium" htmlFor="status">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                id="status"
                className="w-full p-3 mt-2 border rounded-lg text-sm"
              >
                <option>Published</option>
                <option>Draft</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium" htmlFor="template">
                Template <span className="text-red-500">*</span>
              </label>
              <select
                id="template"
                className="w-full p-3 mt-2 border rounded-lg text-sm"
              >
                <option>Standard</option>
                <option>Custom</option>
              </select>
            </div>

            {/* Other Options */}
            <h3 className="text-sm font-medium mb-4 mt-6">Other</h3>
            <div className="space-y-3">
              {/* Toggle Buttons with Tailwind */}
              <div className="flex justify-between items-center">
                <span>Allow Comments</span>
                <input
                  type="checkbox"
                  className="peer hidden"
                  id="allowComments"
                />
                <label
                  htmlFor="allowComments"
                  className="w-10 h-5 bg-gray-300 rounded-full cursor-pointer relative before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 peer-checked:before:translate-x-5 peer-checked:bg-green-500 transition"
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Allow Pingback</span>
                <input
                  type="checkbox"
                  className="peer hidden"
                  id="allowPingback"
                />
                <label
                  htmlFor="allowPingback"
                  className="w-10 h-5 bg-gray-300 rounded-full cursor-pointer relative before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 peer-checked:before:translate-x-5 peer-checked:bg-green-500 transition"
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Pin to Top of Blog</span>
                <input type="checkbox" className="peer hidden" id="pinToTop" />
                <label
                  htmlFor="pinToTop"
                  className="w-10 h-5 bg-gray-300 rounded-full cursor-pointer relative before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 peer-checked:before:translate-x-5 peer-checked:bg-green-500 transition"
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Save Draft</span>
                <input type="checkbox" className="peer hidden" id="saveDraft" />
                <label
                  htmlFor="saveDraft"
                  className="w-10 h-5 bg-gray-300 rounded-full cursor-pointer relative before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 peer-checked:before:translate-x-5 peer-checked:bg-green-500 transition"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
