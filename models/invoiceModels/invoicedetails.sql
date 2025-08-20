
-- Table: public.invoicedetails

-- DROP TABLE IF EXISTS public.invoicedetails;

CREATE TABLE IF NOT EXISTS public.invoicedetails
(
    invoiceid uuid NOT NULL,
	orderid uuid,	
	productdetail json DEFAULT '{}'::json,
	billingaddress json DEFAULT '{}'::json,
	coupondetail json DEFAULT '{}'::json,
	ordertotalamount json DEFAULT '{}'::json,
	authorid uuid,	
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT invoicedetails_pkey PRIMARY KEY (invoiceid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.invoicedetails
    OWNER to postgres;