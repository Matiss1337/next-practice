interface Params {
  params: {name : string}
}
///TS stuff

const getPredictedAge = async (name:string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}t`);
  return res.json()
}

const getPredictedGender = async (name:string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}t`);
  return res.json()
}

export default async function Page({params}: any) {
  ///async creates async function
  /// by puting page.tsx in folder with and then [folder], we can use the name as variable

  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);

  const [age, gender] = await Promise.all([ageData, genderData])
  ///waits multiple promise aka api calls in set order

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
    <h1>{params.name} is Glorious!</h1>
    <h2 className="text-black">He is {age?.age} old {gender?.gender} </h2>
    {/* age?.age opens array and uses age key */}
    </main>
  )
}