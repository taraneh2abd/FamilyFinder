export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/images/1.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/images/2.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/images/3.jpg" />
        </div>
      </div>

      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/images/4.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/images/1.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/images/2.jpg" />
        </div>
      </div>

      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/images/3.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/images/4.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/images/1.jpg" />
        </div>
      </div>

      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/images/2.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/images/3.jpg" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/images/4.jpg" />
        </div>
      </div>

    </div>
  );
}