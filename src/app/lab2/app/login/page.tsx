export default function Login() {
return (
<form className="space-y-6">
<div className="flex flex-col gap-1">
<label className="text-sm font-medium text-gray-700">Email</label>
<input
type="email"
className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black bg-[#f9f9f9]"
placeholder="you@example.com"
/>
</div>


<div className="flex flex-col gap-1">
<label className="text-sm font-medium text-gray-700">Password</label>
<input
type="password"
className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black bg-[#f9f9f9]"
placeholder="••••••••"
/>
</div>


<button className="w-full bg-black text-white p-3 rounded-md text-base font-semibold hover:bg-gray-900 transition">
Sign In
</button>
</form>
);
}