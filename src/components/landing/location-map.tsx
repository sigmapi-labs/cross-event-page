type LocationMapProps = {
  lat: number;
  lng: number;
  label: string;
};

export function LocationMap({ lat, lng, label }: LocationMapProps) {
  const src = `https://maps.google.com/maps?q=${lat},${lng}(${encodeURIComponent(label)})&z=16&hl=ko&output=embed`;

  return (
    <iframe
      title={`${label} 구글 지도`}
      src={src}
      className="absolute inset-0 h-full w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
