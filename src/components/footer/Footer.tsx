export const Footer = () => {
    const year = new Date().getFullYear();

    return <div className="w-[1240px] mx-auto flex flex-col gap-y-2">
        <p>© Joachim Hamraoui {year}.</p>
    </div>;
};