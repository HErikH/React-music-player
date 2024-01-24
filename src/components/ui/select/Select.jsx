function Select({ value, onChange, options, className, ariaLabel }) {
    /**
   * * This is a reusable Ui component
   * ! Be careful with the parameters below 
   * @param {string,number} value
   * @param {function} onChange
   * @param {array of objects} options
   */
  return (
    <select 
        className={className}
        aria-label={ariaLabel}
        value={value}
        onChange={(e) => onChange(e.target.value)}>
          {options.map(filterBy => {
            return (
            <option 
            key={filterBy.name} 
            value={filterBy.value}
            >
              {filterBy.name}
            </option>
          )})}
        </select> 
  )
}

export default Select