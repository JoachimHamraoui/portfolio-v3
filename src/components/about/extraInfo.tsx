export const ExtraInfo = () => {
  const birthDate = new Date(1999, 0, 29); // Month is 0-indexed: 0 = January
  const today = new Date();

  const age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  const finalAge = hasHadBirthdayThisYear ? age : age - 1;

  return (
    <div className="w-2/3 flex flex-col my-12">
      <p className="text-4xl text-primary ">
        I&apos;m a {finalAge} year old <span className="font-semibold">Fullstack Web Developer</span> based in <span className="font-semibold">Brussels, Belgium</span>. I
        recently graduated with a <br />Bachelor&apos;s Degree at Erasmushogeschool Brussel.<br /> I&apos;m fluent in French, Dutch and English. 
        <br />
        <br />
        Eager to learn more
        about Web & App Development. I also read, game and do graphic design in
        my free time.
      </p>
    </div>
  );
};
