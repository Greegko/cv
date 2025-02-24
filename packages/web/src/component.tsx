import { createSignal } from 'solid-js';

export const CvComponent = (props) => {
  const [data] = createSignal(props.data);
  
  return (
    <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 class="text-3xl font-bold text-gray-900">{data().name}</h1>
      <p class="text-gray-600">{data().contact.residence} | {data().contact.citizenship}</p>
      <p class="text-gray-600">📞 {data().contact.mobile} | ✉️ {data().contact.email}</p>
      
      <section class="mt-6">
        <h2 class="text-2xl font-semibold text-gray-800">Introduction</h2>
        <p class="text-gray-700 mt-2">{data().introduction}</p>
      </section>
      
      <section class="mt-6">
        <h2 class="text-2xl font-semibold text-gray-800">Work Experience</h2>
        {data().work_experience.map((job, index) => (
          <div key={index} class="mt-4 border-b pb-4">
            <h3 class="text-xl font-semibold text-gray-900">{job.position} - {job.company}</h3>
            <p class="text-gray-600">{job.location} ({job.date})</p>
            <p class="text-gray-700 mt-2">{job.responsibilities}</p>
          </div>
        ))}
      </section>
      
      <section class="mt-6">
        <h2 class="text-2xl font-semibold text-gray-800">Education</h2>
        <p class="text-gray-900 font-semibold">{data().education.university}</p>
        <p class="text-gray-600">{data().education.location} ({data().education.date})</p>
        <p class="text-gray-700 mt-2">{data().education.degree}</p>
        <p class="text-gray-700 mt-2">Thesis: {data().education.thesis}</p>
      </section>
      
      <section class="mt-6">
        <h2 class="text-2xl font-semibold text-gray-800">Certifications</h2>
        <ul class="list-disc pl-5 text-gray-700">
          {data().certifications.map((cert, index) => (
            <li key={index}>{cert.year} - {cert.certification}</li>
          ))}
        </ul>
      </section>
      
      <section class="mt-6">
        <h2 class="text-2xl font-semibold text-gray-800">Languages</h2>
        <p class="text-gray-700">Native: {data().languages.native}</p>
        <ul class="list-disc pl-5 text-gray-700">
          {data().languages.other.map((lang, index) => (
            <li key={index}>{lang.language} - {lang.level}</li>
          ))}
        </ul>
      </section>
      
      <section class="mt-6">
        <h2 class="text-2xl font-semibold text-gray-800">Programming Interests</h2>
        <p class="text-gray-700">{data().programming_interests}</p>
      </section>
      
      <section class="mt-6">
        <h2 class="text-2xl font-semibold text-gray-800">Hobbies</h2>
        <p class="text-gray-700">{data().hobbies}</p>
      </section>
    </div>
  );
};

export default CvComponent;