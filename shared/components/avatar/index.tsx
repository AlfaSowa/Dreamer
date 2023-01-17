export const Avatar = () => {
  return (
    <div>
      <div className="relative mx-auto w-6/12">
        <div className="pt-[100%] ">
          <img
            className="rounded-full absolute bg-red-50 top-0 shadow-[0_0_0_3px_var(--color-bg-add),0_0_0_5px_red]"
            src="https://englex.ru/app/uploads/vera.m_165.jpg"
            alt="qweqw"
          />
        </div>

        {/* <div className="absolute bg-red-600 h-4 w-4 rounded-full bottom-[6%] right-[6%] border-[4px] border-[color:var(--color-bg-add)]" /> */}
      </div>
    </div>
  );
};
