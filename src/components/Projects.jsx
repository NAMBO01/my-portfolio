const projects = [
  { title: "Hệ thống quản lý sinh viên", desc: "Java Swing CRUD sinh viên." },
  {
    title: "Website tin tức khoa học",
    desc: "Laravel + MySQL, phân quyền admin/user.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6">Dự án của tôi</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
