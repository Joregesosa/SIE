export const Form1 = () => (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg mx-auto bg-white bg-opacity-75 p-5 h-full'>
        <div className="field">
            <label htmlFor="level" className="font-bold text-xs">
                Año Educativo al que ingresa el alumno Educación General Básica (EGB),o Bachillerato General Unificado (BGU)
            </label>
            <Dropdown
                value={data?.level}
                onChange={(e) => setData('level', (e.target.value))}
                options={courseLevels}
                optionLabel="level"
                placeholder="Seleccione un nivel"
                filter
                className="flex items-center border h-[42px] border-gray-500 flex-grow"
            />
        </div>
        <div>
            <label htmlFor="firstName" className="font-bold text-xs">
                Primer nombre <span>*</span>
            </label>
            <InputText
                id="first_name"
                value={data?.first_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('first_name', e.target.value)}
                placeholder="Ingrese el primer nombre"
            />
        </div>
        <div>
            <label htmlFor="second_Name" className="font-bold text-xs">
                Segundo nombre
            </label>
            <InputText
                id="second_Name"
                value={data?.second_Name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('second_Name', e.target.value)}
                placeholder="Ingrese el segundo nombre"
            />
        </div>
        <div>
            <label htmlFor="fLast_name" className="font-bold text-xs">
                Primer Apellido <span>*</span>
            </label>
            <InputText
                id="fLast_name"
                value={data?.fLast_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('fLast_name', e.target.value)}
                placeholder="Ingrese el primer apellido"
            />
        </div>
        <div>
            <label htmlFor="sLast_name" className="font-bold text-xs">
                Segundo Apellido
            </label>
            <InputText
                id="sLast_name"
                value={data?.sLast_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('sLast_name', e.target.value)}
                placeholder="Ingrese el segundo apellido"
            />
        </div>
        <div>
            <label htmlFor="birth_date" className="font-bold text-xs">
                Fecha de nacimiento <span>*</span>
            </label>
            <InputText
                id="birth_date"
                value={data?.birth_date}
                type='date'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('birth_date', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </div>
        <div>
            <label htmlFor="birth_day_place" className="font-bold text-xs">
                Lugar de nacimiento <span>*</span>
            </label>
            <InputText
                id="birth_day_place"
                value={data?.birth_day_place}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('birth_day_place', e.target.value)}
                placeholder="Ingrese el lugar de nacimiento"
            />
        </div>
        <div>
            <label htmlFor="id_card" className="font-bold text-xs">
                Número de cédula <span>*</span>
            </label>
            <InputText
                id="id_card"
                value={data?.id_card}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('id_card', e.target.value)}
                placeholder="Ingrese el número de cédula"
            />
        </div>
        <div>
            <label htmlFor="id_card" className="font-bold text-xs">
                Edad del alumno <span>*</span>
            </label>
            <InputText
                id="id_card"
                value={data?.id_card}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('id_card', e.target.value)}
                placeholder="Ingrese la edad del alumno"
            />
        </div>
        <div>
            <label htmlFor="address_street" className="font-bold text-xs">
                Dirección del domicilio (calles) <span>*</span>
            </label>
            <InputText
                id="address_street"
                value={data?.address_street}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('address_street', e.target.value)}
                placeholder="Ingrese la dirección"
            />
        </div>
        <div>
            <label htmlFor="address_sector" className="font-bold text-xs">
                Sector <span>*</span>
            </label>
            <InputText
                id="address_sector"
                value={data?.address_sector}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('address_sector', e.target.value)}
                placeholder="Ingrese la dirección"
            />
        </div>
        <div>
            <label htmlFor="number" className="font-bold text-xs">
                Número de teléfono <span>*</span>
            </label>
            <InputText
                id="number"
                value={data?.number}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('number', e.target.value)}
                placeholder="Ingrese el número de teléfono"
            />
        </div>
        <div>
            <label htmlFor="reference" className="font-bold text-xs">
                Referencia <span>*</span>
            </label>
            <InputText
                id="number"
                value={data?.reference}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('reference', e.target.value)}
                placeholder="Ingrese el número de teléfono"
            />
        </div>

        <div className='w-full flex justify-end md:col-span-2'>
            <button type='button' className='px-5 rounded-md bg-sky-400 py-2'>Siguiente</button>
        </div>
    </div>
)

export const Form2 = () => (

    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg mx-auto bg-white bg-opacity-75 p-5 h-full'>
        <div>
            <label htmlFor="first_name" className="font-bold text-xs">
                Primer nombre <span>*</span>
            </label>
            <InputText
                id="first_name"
                value={data?.first_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('first_name', e.target.value)}
                placeholder="Ingrese el primer nombre"
            />
        </div>
        <div>
            <label htmlFor="second_name" className="font-bold text-xs">
                Segundo nombre
            </label>
            <InputText
                id="second_name"
                value={data?.second_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('second_name', e.target.value)}
                placeholder="Ingrese el segundo nombre"
            />
        </div>
        <div>
            <label htmlFor="fLast_name" className="font-bold text-xs">
                Primer Apellido <span>*</span>
            </label>
            <InputText
                id="fLast_name"
                value={data?.fLast_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('fLast_name', e.target.value)}
                placeholder="Ingrese el primer apellido"
            />
        </div>
        <div>
            <label htmlFor="sLast_name" className="font-bold text-xs">
                Segundo Apellido
            </label>
            <InputText
                id="sLast_name"
                value={data?.sLast_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('sLast_name', e.target.value)}
                placeholder="Ingrese el segundo apellido"
            />
        </div>
        <div>
            <label htmlFor="birth_date" className="font-bold text-xs">
                Fecha de nacimiento <span>*</span>
            </label>
            <InputText
                id="birth_date"
                value={data?.birth_date}
                type='date'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('birth_date', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </div>
        <div>
            <label htmlFor="marital_status" className="font-bold text-xs">
                Estado civil <span>*</span>
            </label>
            <Dropdown
                value={data?.marital_status}
                onChange={(e) => setData('marital_status', (e.target.value))}
                options={maritalStatusOptions}
                optionLabel="label"
                placeholder="Seleccione un estado civil"
                filter
                className="flex items-center border h-[42px] border-gray-500 flex-grow" />
        </div>
        <div>
            <label htmlFor="instruction_level" className="font-bold text-xs">
                Nivel de Instrucción <span>*</span>
            </label>
            <Dropdown
                value={data?.instruction_level}
                onChange={(e) => setData('instruction_level', (e.target.value))}
                options={instructionLevelOptions}
                optionLabel="label"
                placeholder="Seleccione un nivel de instrucción"
                filter
                className="flex items-center border h-[42px] border-gray-500 flex-grow" />
        </div>

        <div>
            <label htmlFor="profession" className="font-bold text-xs">
                Profesión/ocupación <span>*</span>
            </label>
            <InputText
                id="profession"
                value={data?.profession}
                type='text'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('profession', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </div>
        <div>
            <label htmlFor="work_place" className="font-bold text-xs">
                Lugar de trabajo <span>*</span>
            </label>
            <InputText
                id="work_place"
                value={data?.work_place}
                type='text'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('work_place', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </div>
        <div>
            <label htmlFor="number" className="font-bold text-xs">
                Teléfono de contacto <span>*</span>
            </label>
            <InputText
                id="number"
                value={data?.number}
                type='text'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('number', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </div>
        <div>
            <label htmlFor="email" className="font-bold text-xs">
                Correo Electrónico <span>*</span>
            </label>
            <InputText
                id="email"
                value={data?.email}
                type='text'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('email', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </div>


        <div className='w-full flex justify-end md:col-span-2'>
            <button type='button' className='px-5 rounded-md bg-sky-400 py-2'>Siguiente</button>
        </div>


    </div>
)

export const Form3 = () => (

    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg mx-auto bg-white bg-opacity-75 p-5 h-full'>
        <div>
            <label htmlFor="first_name" className="font-bold text-xs">
                Primer nombre <span>*</span>
            </label>
            <InputText
                id="first_name"
                value={data?.first_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('first_name', e.target.value)}
                placeholder="Ingrese el primer nombre"
            />
        </div>
        <div>
            <label htmlFor="second_name" className="font-bold text-xs">
                Segundo nombre
            </label>
            <InputText
                id="second_name"
                value={data?.second_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('second_name', e.target.value)}
                placeholder="Ingrese el segundo nombre"
            />
        </div>
        <div>
            <label htmlFor="fLast_name" className="font-bold text-xs">
                Primer Apellido <span>*</span>
            </label>
            <InputText
                id="fLast_name"
                value={data?.fLast_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('fLast_name', e.target.value)}
                placeholder="Ingrese el primer apellido"
            />
        </div>
        <div>
            <label htmlFor="sLast_name" className="font-bold text-xs">
                Segundo Apellido
            </label>
            <InputText
                id="sLast_name"
                value={data?.sLast_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('sLast_name', e.target.value)}
                placeholder="Ingrese el segundo apellido"
            />
        </div>
        <div>
            <label htmlFor="birth_date" className="font-bold text-xs">
                Fecha de nacimiento <span>*</span>
            </label>
            <InputText
                id="birth_date"
                value={data?.birth_date}
                type='date'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('birth_date', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </div>
        <div>
            <label htmlFor="marital_status" className="font-bold text-xs">
                Estado civil <span>*</span>
            </label>
            <Dropdown
                value={data?.marital_status}
                onChange={(e) => setData('marital_status', (e.target.value))}
                options={maritalStatusOptions}
                optionLabel="label"
                placeholder="Seleccione un estado civil"
                filter
                className="flex items-center border h-[42px] border-gray-500 flex-grow" />
        </div>
        <div>
            <label htmlFor="instruction_level" className="font-bold text-xs">
                Nivel de Instrucción <span>*</span>
            </label>
            <Dropdown
                value={data?.instruction_level}
                onChange={(e) => setData('instruction_level', (e.target.value))}
                options={instructionLevelOptions}
                optionLabel="label"
                placeholder="Seleccione un nivel de instrucción"
                filter
                className="flex items-center border h-[42px] border-gray-500 flex-grow" />
        </div>

        <div>
            <label htmlFor="profession" className="font-bold text-xs">
                Profesión/ocupación <span>*</span>
            </label>
            <InputText
                id="profession"
                value={data?.profession}
                type='text'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('profession', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </div>
        <div>
            <label htmlFor="work_place" className="font-bold text-xs">
                Lugar de trabajo <span>*</span>
            </label>
            <InputText
                id="work_place"
                value={data?.work_place}
                type='text'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('work_place', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </div>
        <div>
            <label htmlFor="number" className="font-bold text-xs">
                Teléfono de contacto <span>*</span>
            </label>
            <InputText
                id="number"
                value={data?.number}
                type='text'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('number', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </div>
        <div>
            <label htmlFor="email" className="font-bold text-xs">
                Correo Electrónico <span>*</span>
            </label>
            <InputText
                id="email"
                value={data?.email}
                type='text'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('email', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </div>


        <div className='w-full flex justify-end md:col-span-2'>
            <button type='button' className='px-5 rounded-md bg-sky-400 py-2'>Siguiente</button>
        </div>


    </div>
)

export const Form4 = () => (

    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg mx-auto bg-white bg-opacity-75 p-5 h-full'>

        <label htmlFor="first_name" className="font-bold text-xs">
            Primer nombre <span>*</span>
            <InputText
                id="first_name"
                value={data?.first_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('first_name', e.target.value)}
                placeholder="Ingrese el primer nombre"
            />
        </label>

        <label htmlFor="second_name" className="font-bold text-xs">
            Segundo nombre
            <InputText
                id="second_name"
                value={data?.second_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('second_name', e.target.value)}
                placeholder="Ingrese el segundo nombre"
            />
        </label>
 
        <label htmlFor="fLast_name" className="font-bold text-xs">
            Primer Apellido <span>*</span>
            <InputText
                id="fLast_name"
                value={data?.fLast_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('fLast_name', e.target.value)}
                placeholder="Ingrese el primer apellido"
            />
        </label>
 
        <label htmlFor="sLast_name" className="font-bold text-xs">
            Segundo Apellido
            <InputText
                id="sLast_name"
                value={data?.sLast_name}
                required
                className='rounded-md w-full'
                onChange={(e) => setData('sLast_name', e.target.value)}
                placeholder="Ingrese el segundo apellido"
            />
        </label>

        <label htmlFor="birth_date" className="font-bold text-xs">
            Fecha de nacimiento <span>*</span>
            <InputText
                id="birth_date"
                value={data?.birth_date}
                type='date'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('birth_date', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </label>

        <label htmlFor="marital_status" className="font-bold text-xs">
            Estado civil <span>*</span>
            <Dropdown
                value={data?.marital_status}
                onChange={(e) => setData('marital_status', (e.target.value))}
                options={maritalStatusOptions}
                optionLabel="label"
                placeholder="Seleccione un estado civil"
                filter
                className="flex items-center border h-[42px] border-gray-500 flex-grow" />
        </label>

        <label htmlFor="instruction_level" className="font-bold text-xs">
            Nivel de Instrucción <span>*</span>
            <Dropdown
                value={data?.instruction_level}
                onChange={(e) => setData('instruction_level', (e.target.value))}
                options={instructionLevelOptions}
                optionLabel="label"
                placeholder="Seleccione un nivel de instrucción"
                filter
                className="flex items-center border h-[42px] border-gray-500 flex-grow" />
        </label>
 
        <label htmlFor="profession" className="font-bold text-xs">
            Profesión/ocupación <span>*</span>
            <InputText
                id="profession"
                value={data?.profession}
                type='text'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('profession', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </label>
 
        <label htmlFor="work_place" className="font-bold text-xs">
            Lugar de trabajo <span>*</span>
            <InputText
                id="work_place"
                value={data?.work_place}
                type='text'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('work_place', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </label>
 
        <label htmlFor="number" className="font-bold text-xs">
            Teléfono de contacto <span>*</span>
            <InputText
                id="number"
                value={data?.number}
                type='text'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('number', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </label>

        <label htmlFor="email" className="font-bold text-xs">
            Correo Electrónico <span>*</span>
            <InputText
                id="email"
                value={data?.email}
                type='text'
                required
                className='rounded-md w-full'
                onChange={(e) => setData('email', e.target.value)}
                placeholder="Ingrese la fecha de nacimiento"
            />
        </label>
 
        <div className='w-full flex justify-end md:col-span-2'>
            <button type='button' className='px-5 rounded-md bg-sky-400 py-2'>Siguiente</button>
        </div>
 
    </div>
)

