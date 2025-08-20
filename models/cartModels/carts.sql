-- Table: public.carts

-- DROP TABLE IF EXISTS public.carts;

CREATE TABLE IF NOT EXISTS public.carts
(
    cartid uuid NOT NULL,
	couponid uuid,
	deliveryaddressid uuid,
	cartstatus character(255) COLLATE pg_catalog."default" DEFAULT 'Inactive'::bpchar,
	authorid uuid,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT carts_pkey PRIMARY KEY (cartid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.carts
    OWNER to postgres;