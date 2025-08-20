-- Table: public.orders

-- DROP TABLE IF EXISTS public.orders;

CREATE TABLE IF NOT EXISTS public.orders
(
    orderid uuid NOT NULL,
	orderstatusid uuid,	
	paymentid uuid,
	deliveryaddressid uuid,
	sellerid uuid, 
	ordertotalamount json DEFAULT '{}'::json,
	authorid uuid,	
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT orders_pkey PRIMARY KEY (orderid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.orders
    OWNER to postgres;