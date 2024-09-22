import Image from "next/image";

export const metadata = {
  title: "HomePage",
  description: "Generated by create next app",
};
export default function Home() {
  return (
    <div className="homeDiv">
      <h1 className=" text-2xl text-center mt-5 font-bold">
        Home Page of RootLayout
      </h1>
      <div className="mt-10 ml-5">
        <h2>First, run the development server:</h2>
        <pre>
          <b>npm run dev</b>
        </pre>
        <hr />
        <li>Open <a href="http://localhost:3000">http://localhost:3000</a> with your browser to see the result.</li>

    <b>Defining Routes</b>
    <li>Next.js uses a <strong>file-system based router</strong> where <strong>folders are used to define routes.</strong></li>

    <li>A special <strong>page.js</strong> file is used to make route segments publicly accessible.</li>
    

    <b>Pages and Layouts</b>
    <li>Pages are Server Components by default</li>
    <li>Layouts never re-render.</li>
    <li>RootLayout:</li>
    
    <b>Nested Layout:</b>
   

    <b>Navigate and Linking</b>
    <li>All hooks are <strong>Client components</strong></li>
    <li>Programmatically go to URL is possible using the <strong>usePathName hook</strong> of Next.js implemented in the CustomLink Component</li>
    <li>Programmatically navigate is possible using the <strong>useRouter hook</strong> of Next.js implemented in the CustomButton Component</li>

    <b>Loading UI and Streaming</b>
    <li>This part uses the concept of React Suspense</li>

    <b>Dynamic Routes</b>
    <li>This part is implemented in the <strong>BlogList component</strong></li>
   
      </div>
    </div>
  );
}