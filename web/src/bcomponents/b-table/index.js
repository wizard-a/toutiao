import BasicTable from './basicTable';
import tableEffectHoc from './tableEffectHoc';
import Search from './crud/search';
import Create from './crud/create';
import Update from './crud/update';
import Del from './crud/del';

BasicTable.tableEffectHoc = tableEffectHoc;
BasicTable.Search = Search;
BasicTable.Create = Create;
BasicTable.Update = Update;
BasicTable.Del = Del;

export default BasicTable;
