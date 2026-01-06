import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const mutation = useSubmitContact();
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-secondary/30 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
      <h3 className="text-2xl font-bold text-white mb-2">Get in touch</h3>
      <p className="text-muted-foreground text-sm mb-6">
        Have questions about our pro features? We're here to help.
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="Your Name"
            {...form.register("name")}
            className="bg-background/50 border-white/10 focus:border-primary focus:ring-primary/20 transition-all h-12"
          />
          {form.formState.errors.name && (
            <p className="text-xs text-red-400 pl-1">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email Address"
            {...form.register("email")}
            className="bg-background/50 border-white/10 focus:border-primary focus:ring-primary/20 transition-all h-12"
          />
          {form.formState.errors.email && (
            <p className="text-xs text-red-400 pl-1">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Textarea
            placeholder="How can we help you?"
            {...form.register("message")}
            className="bg-background/50 border-white/10 focus:border-primary focus:ring-primary/20 transition-all min-h-[120px] resize-none"
          />
          {form.formState.errors.message && (
            <p className="text-xs text-red-400 pl-1">{form.formState.errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={mutation.isPending}
          className="w-full h-12 bg-primary text-primary-foreground font-bold hover:bg-cyan-400 shadow-lg shadow-primary/25 transition-all hover:translate-y-[-1px]"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
