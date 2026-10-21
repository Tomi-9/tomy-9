import Link from 'next/link';

const projects = [
    {
        name: "Oku",
        description: "Note taking app",
        href: "https://oku-t.vercel.app",
    },
];

export default function Page() {
    return (
        <article className="flex flex-col gap-2 mx-auto my-15">
            <h1 className="font-semibold text-xl">Projects</h1>
            <div className="flex flex-col divide-y divide-neutral-800 mb-6">
                {projects
                    .map((p) => (
                        <Project key={p.href} {...p} />
                    ))}
            </div>
        </article>
    );
}

interface ProjectProps {
    tag?: string;
    name: string;
    description: string;
    href: string;
}

function Project(project: ProjectProps) {
    return (
        <Link
            href={project.href}
            className="group px-4 py-3 -mx-4 rounded-xl text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-neutral-200 hover:transition-none"
            rel="noreferrer noopener"
            target="_blank"
        >
            <p className="text-sm text-neutral-100 font-medium">{project.name}</p>
            <p className="text-sm">{project.description}</p>
        </Link>
    );
}