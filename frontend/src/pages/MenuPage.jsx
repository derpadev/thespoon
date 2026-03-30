import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import desserts from "@/data/menu.json";
import {
  TOP_FILTERS,
  getSubFiltersForTop,
  itemMatchesFilters,
  getItemTypeLabel,
} from "@/lib/menuFilters";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function MenuPage() {
  const [search, setSearch] = useState("");
  const [topFilter, setTopFilter] = useState("All");
  const [subFilter, setSubFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subFilters = getSubFiltersForTop(topFilter);

  const filteredDesserts = desserts.filter((dessert) => {
    const matchesSearch = dessert.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilters = itemMatchesFilters(dessert, topFilter, subFilter);
    return matchesSearch && matchesFilters;
  });

  return (
    <div className="min-h-screen bg-[#FFF7E8] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#D4AF37] transition mb-8"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <h2 className="text-gray-800 text-4xl font-bold mb-2">Full Menu</h2>
        <p className="text-gray-500 mb-8">Browse everything we have to offer. <br /> NOTE: Some items may be seasonal or limited availability. <br /> Please call ahead to check availability.</p>

        <div className="flex flex-col gap-4 mb-10">
          <Input
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm bg-white"
          />

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {TOP_FILTERS.map((label) => (
                <Button
                  key={label}
                  size="sm"
                  variant={topFilter === label ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => {
                    setTopFilter(label);
                    setSubFilter("All");
                  }}
                >
                  {label}
                </Button>
              ))}
            </div>
            {subFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200/80">
                {subFilters.map((label) => (
                  <Button
                    key={label}
                    size="sm"
                    variant={subFilter === label ? "default" : "outline"}
                    className="rounded-full"
                    onClick={() => setSubFilter(label)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>

        {filteredDesserts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No items found.</p>
            <button
              className="mt-2 text-[#D4AF37] underline text-sm"
              onClick={() => {
                setSearch("");
                setTopFilter("All");
                setSubFilter("All");
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredDesserts.map((dessert) => (
              <motion.div
                key={dessert.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="rounded-2xl shadow-md overflow-hidden">
                  {dessert.image && (
                    <img
                      src={dessert.image}
                      alt={dessert.name}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <CardContent className="p-6">
                    <h4 className="text-xl text-gray-800 font-semibold mb-1">{dessert.name}</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      {getItemTypeLabel(dessert)}
                    </p>
                    <span className="font-bold text-[#D4AF37] text-lg">{dessert.price}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
