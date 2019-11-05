package storage

// Struct containing the main descriptions of each Agency.
// Estrutura
type Agency struct {
	ID        interface{} `json:"id" bson:"_id,omitempty"`
	ShortName string      // 'trt13'
	Name      string      // 'Tribunal Regional do Trabalho 13° Região'
	Type      string      // "R" for Regional, "M" for Municipal, "F" for Federal, "E" for State.
	Entity    string      // "J" or "MP".
	UF        string      // Short code for federative unity.
	State     string      // Full name of state.
}

// Struct containing all necessary data to build all UI screens
type AgencyMonthlyInfo struct {
	Agency   string   // Agency shortname
	Storage  []string // Link to original files.
	Month    int
	Year     int
	Summary  Summary
	Employee []Employee
}

// Data Summary with statistics.
type DataSummary struct {
	Max    float64
	Min    float64
	Median float64
	Total  float64
}

type Summary struct {
	Count  int         // Number of employees
	Wage   DataSummary //  Statistics (Max, Min, Median, Total)
	Perk   DataSummary //  Statistics (Max, Min, Median, Total)
	Others DataSummary //  Statistics (Max, Min, Median, Total)
}

type Employee struct {
	Reg            string // Register number
	Name           string
	Role           string
	Type           string  // servidor, membro or pensionista
	Workplace      string  // 'Lotacao' Like '10° Zona eleitoral'
	Active         bool    // 'Active' Or 'Inactive'
	GrossIncome    float64 // Income received without discounts applied.
	TotalDiscounts float64 // Discounts to be applied in Gross Income
	NetIncome      float64 // Final income received after discounts applied
	Income         Income  //
	Discounts      Discount
}

type Income struct {
	Wage  float64
	perk  float64
	Other Funds // other funds that make up the total income of the employee. further details explained below
}

type Funds struct {
	PersonalBenefits float64 // Permanent Allowance, VPI, Benefits adquired thought judicial demand and others personal.
	EventualBenefits float64 // Holidays, Others Temporary Wage,  Christmas bonus and some others eventual.
	PositionOfTrust  float64 // Income given for the importance of the position held.
	Daily            float64 // Employee reimbursement for eventual expenses when working in a different location than usual.
	Gratification    float64 //
	OriginPosition   float64 // Wage received from other Agency, transfered employee.
	Others           float64 // Any other kind of income that does not have a pattern among the Agencys.
}

type Discount struct {
	PrevContribution float64 // 'Contribuição Previdenciária'
	CeilRetention    float64 // 'Retenção de teto'
	IncomeTax        float64 // 'Imposto de renda'
	Sundry           float64 // 'Diversos'

}

// Could be one file or a array of files. Zip. Struct responsible for storing a file, the date and a file hash to track if there will be any
// changes in the future.
type StorageInfo struct {
	File         []byte
	FileName     string
	RetrieveDate string
	FileHash     string
}
