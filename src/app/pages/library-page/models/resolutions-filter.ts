export class ResolutionsFilter {
  inMoscom?: boolean;
  exported?: boolean;
  smallEnterprise?: boolean;
}

export class ResolutionsFilterAdvanced {
  inMoscom?: boolean;
  exported?: boolean;
  smallEnterprise?: boolean;

  moscowOrRf?: Array<number>;
  sizeOfEnterprise?: Array<number>;
  supportMeasures?: Array<number>;
  scopeOfProducts?: Array<number>;
  dataChoice?: Array<number>;
  grandAndLoans?: Array<number>;

  searchText?: string;

}

