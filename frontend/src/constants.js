export const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
}

export const clerkProviderAppearance = {
  baseTheme: "dark", // Dark mode base
  variables: {
    colorPrimary: "#6366F1", // Tailwind indigo-500 (modern vibe)
    colorText: "#E5E7EB", // gray-200
    colorBackground: "#0F172A", // slate-900
    colorInputBackground: "#1E293B", // slate-800
    colorInputText: "#F1F5F9", // gray-100
  },
  elements: {
    // Container card
    card:
      "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-2xl shadow-2xl backdrop-blur-md p-6",

    // Header
    headerTitle:
      "text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400",
    headerSubtitle: "text-slate-400 text-sm",

    // Social login buttons
    socialButtonsBlockButton:
      "bg-white text-white hover:bg-slate-100 rounded-xl border border-slate-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2",

    // Input fields
    formFieldInput:
      "bg-slate-800/70 border border-slate-600 text-slate-100 placeholder-slate-400 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200",

    // Primary button
    formButtonPrimary:
      "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200",

    // Footer (optional links like “Don’t have an account?”)
    footerActionLink:
      "text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-200",
  },
};
