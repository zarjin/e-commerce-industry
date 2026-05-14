import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 font-sans text-black">
      {/* Breadcrumb */}
      <nav className="mb-10 flex items-center gap-2 text-sm">
        <span className="text-gray-400">Home</span>
        <span className="text-gray-400">/</span>
        <span className="font-medium text-black">Profile</span>
      </nav>

      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Edit Profile Form */}
        <main className="flex-1 rounded-sm bg-white p-8 shadow-[0px_0px_10px_rgba(0,0,0,0.05)] lg:px-20 lg:py-10">
          <h2 className="mb-6 text-xl font-medium text-[#DB4444]">
            Edit Your Profile
          </h2>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Name Row */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-base">First Name</label>
                <input
                  type="text"
                  placeholder="Md"
                  className="rounded bg-[#F5F5F5] px-4 py-3 outline-none placeholder:text-gray-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-base">Last Name</label>
                <input
                  type="text"
                  placeholder="Rimel"
                  className="rounded bg-[#F5F5F5] px-4 py-3 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-base">Email</label>
                <input
                  type="email"
                  placeholder="rimel1111@gmail.com"
                  className="rounded bg-[#F5F5F5] px-4 py-3 outline-none placeholder:text-gray-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-base">Address</label>
                <input
                  type="text"
                  placeholder="Kingston, 5236, United State"
                  className="rounded bg-[#F5F5F5] px-4 py-3 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password Section */}
            <div className="flex flex-col gap-4">
              <label className="text-base">Password Changes</label>
              <input
                type="password"
                placeholder="Current Passwod"
                className="w-full rounded bg-[#F5F5F5] px-4 py-3 outline-none placeholder:text-gray-400"
              />
              <input
                type="password"
                placeholder="New Passwod"
                className="w-full rounded bg-[#F5F5F5] px-4 py-3 outline-none placeholder:text-gray-400"
              />
              <input
                type="password"
                placeholder="Confirm New Passwod"
                className="w-full rounded bg-[#F5F5F5] px-4 py-3 outline-none placeholder:text-gray-400"
              />
            </div>

            {/* Form Actions */}
            <div className="mt-4 flex flex-wrap items-center justify-end gap-8">
              <button type="button" className="text-base hover:underline">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded bg-[#DB4444] px-12 py-4 text-base font-medium text-white hover:bg-[#c23b3b] transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Profile;
