export default function Page({params}: any) {
  /// by puting page.tsx in folde with and then [folder], we can use the name as variable
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
    <h1>{params.name}</h1>
    </main>
  )
}
