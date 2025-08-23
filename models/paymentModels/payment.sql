-- Table: public.payments

-- DROP TABLE IF EXISTS public.payments;

CREATE TABLE IF NOT EXISTS public.payments
(
    paymentid uuid NOT NULL,
	cartid uuid,
	transactionid uuid,
	paymentgatewayresponse  json DEFAULT '{}'::json,
	paymenttype character(255) COLLATE pg_catalog."default" NOT NULL,	
	authorid uuid,
	paymentstatus character(255) COLLATE pg_catalog."default" DEFAULT 'Inactive'::bpchar,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT payment_pkey PRIMARY KEY (paymentid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.payments
    OWNER to postgres;