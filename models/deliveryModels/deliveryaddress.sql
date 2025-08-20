-- Table: public.deliveryaddress

-- DROP TABLE IF EXISTS public.deliveryaddress;

CREATE TABLE IF NOT EXISTS public.deliveryaddress
(
    deliveryaddressid uuid NOT NULL,
	name character(255) COLLATE pg_catalog."default" NOT NULL,
	phonenumber character(255) COLLATE pg_catalog."default" NOT NULL,
	addresslineone character(255) COLLATE pg_catalog."default" NOT NULL,
	addresslinetwo character(255) COLLATE pg_catalog."default" NOT NULL,
	landmark character(255) COLLATE pg_catalog."default" NOT NULL,
	postalcode integer NOT NULL DEFAULT 0,
	cityname character(255) COLLATE pg_catalog."default" NOT NULL,
	districtname character(255) COLLATE pg_catalog."default" NOT NULL,
	statename character(255) COLLATE pg_catalog."default" NOT NULL,
	deliveryaddressstatus character(255) COLLATE pg_catalog."default" DEFAULT 'Inactive'::bpchar,
	authorid uuid,	
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT deliveryaddress_pkey PRIMARY KEY (deliveryaddressid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.deliveryaddress
    OWNER to postgres;