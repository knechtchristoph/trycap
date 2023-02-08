using {try.cap as ck} from '../db/data-model';

@path : '/cap'
service MyService {

    @readonly
    entity Customers as projection on ck.Customers;
}
