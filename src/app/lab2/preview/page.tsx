"use client";

export default function Preview({ searchParams }: { searchParams: { title: string; content: string } }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{searchParams.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: searchParams.content }}
      />
    </div>
  );
}
